// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableGenerationResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * generationId
   * 
   * @example
   * 1708674867
   */
  generationId?: number;
  /**
   * @remarks
   * starting, building, ready, stopped, failed
   * 
   * @example
   * ready
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      generationId: 'generationId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generationId: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


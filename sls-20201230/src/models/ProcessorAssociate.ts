// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProcessorAssociate extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ingest-processor-1
   */
  processorId?: string;
  static names(): { [key: string]: string } {
    return {
      processorId: 'processorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processorId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


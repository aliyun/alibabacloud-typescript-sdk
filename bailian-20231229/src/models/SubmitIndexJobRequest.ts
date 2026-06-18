// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitIndexJobRequest extends $dara.Model {
  /**
   * @remarks
   * The knowledge base ID, which is the `Data.Id` returned by the **CreateIndex** operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 79c0alxxxx
   */
  indexId?: string;
  static names(): { [key: string]: string } {
    return {
      indexId: 'IndexId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


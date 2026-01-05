// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDatasetRequest extends $dara.Model {
  /**
   * @remarks
   * The dataset ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dataworks-dataset:3pXXXb8o0ngr07njhps1
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDatasetRequest extends $dara.Model {
  /**
   * @example
   * new comment
   */
  comment?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dataworks-dataset:3pXXXb8o0ngr07njhps1
   */
  id?: string;
  /**
   * @example
   * test_oss_dataset_new
   */
  name?: string;
  /**
   * @example
   * ## introduction
   */
  readme?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      id: 'Id',
      name: 'Name',
      readme: 'Readme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      id: 'string',
      name: 'string',
      readme: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDatasetRequest extends $dara.Model {
  /**
   * @remarks
   * The dataset description. Length not exceeding 1024.
   * 
   * @example
   * new comment
   */
  comment?: string;
  /**
   * @remarks
   * The dataset ID. Only DataWorks datasets are supported for update.
   * 
   * This parameter is required.
   * 
   * @example
   * dataworks-dataset:3pXXXb8o0ngr07njhps1
   */
  id?: string;
  /**
   * @remarks
   * The dataset name. A non-empty string, length not exceeding 128.
   * 
   * @example
   * test_oss_dataset_new
   */
  name?: string;
  /**
   * @remarks
   * The user guide, supports Markdown formatted rich text.
   * 
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


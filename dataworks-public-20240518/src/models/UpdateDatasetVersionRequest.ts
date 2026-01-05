// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDatasetVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The dataset version description. Maximum length: 1024 characters.
   * 
   * @example
   * this is a comment
   */
  comment?: string;
  /**
   * @remarks
   * The dataset version ID. Only DataWorks datasets can be updated.
   * 
   * This parameter is required.
   * 
   * @example
   * dataworks-datasetVersion:3pXXXb8o0ngr07njhps1
   * :2
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
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


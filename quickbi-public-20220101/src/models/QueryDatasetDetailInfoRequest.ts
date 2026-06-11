// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDatasetDetailInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The dataset ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 5820f58c-c734-4d8a-baf1-7979af4f****
   */
  datasetId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


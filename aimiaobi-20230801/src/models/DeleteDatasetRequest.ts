// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDatasetRequest extends $dara.Model {
  /**
   * @remarks
   * Unique identifier of the dataset
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  datasetId?: number;
  /**
   * @remarks
   * Unique identifier of Alibaba Cloud Model Studio workspace: [Get workspaceId](https://help.aliyun.com/document_detail/2782167.html)
   * 
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


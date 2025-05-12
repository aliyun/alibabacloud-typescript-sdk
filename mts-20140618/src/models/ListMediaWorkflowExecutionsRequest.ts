// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMediaWorkflowExecutionsRequest extends $dara.Model {
  /**
   * @remarks
   * The Object Storage Service (OSS) URL of the input file of the media workflow. The URL complies with RFC 3986 and is encoded in UTF-8, with reserved characters being percent-encoded. For more information, see [URL encoding](https://help.aliyun.com/document_detail/423796.html).
   * 
   * @example
   * http://example-****.cn-hangzhou.aliyuncs.com/test****.flv
   */
  inputFileURL?: string;
  /**
   * @remarks
   * The maximum number of media workflow execution instances to return. Valid values: `[1,100]`. Default value: **10**.
   * 
   * @example
   * 1
   */
  maximumPageSize?: number;
  /**
   * @remarks
   * The ID of the media workflow whose execution instances you want to query. To obtain the workflow ID, you can log on to the **ApsaraVideo Media Processing (MPS) console** and choose **Workflows** > **Workflow Settings**.
   * 
   * @example
   * 43b7335a4b1d4fe883670036affb****
   */
  mediaWorkflowId?: string;
  /**
   * @remarks
   * The name of the media workflow. To obtain the workflow name, you can log on to the **MPS console** and choose **Workflows** > **Workflow Settings**.
   * 
   * @example
   * example-mediaworkflow-****
   */
  mediaWorkflowName?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. The value is a UUID that contains 32 characters. When you request the first page of query results, leave the NextPageToken parameter empty. When you request more query results, specify the value of the NextPageToken parameter returned in the query results on the previous page.
   * 
   * @example
   * 39f8e0bc005e4f309379701645f4****
   */
  nextPageToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      inputFileURL: 'InputFileURL',
      maximumPageSize: 'MaximumPageSize',
      mediaWorkflowId: 'MediaWorkflowId',
      mediaWorkflowName: 'MediaWorkflowName',
      nextPageToken: 'NextPageToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputFileURL: 'string',
      maximumPageSize: 'number',
      mediaWorkflowId: 'string',
      mediaWorkflowName: 'string',
      nextPageToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSmarttagJobRequest extends $dara.Model {
  /**
   * @example
   * example content ****
   */
  content?: string;
  /**
   * @example
   * http://exampleBucket.oss-cn-shanghai.aliyuncs.com/mps-test/ai-tag.mp4
   */
  contentAddr?: string;
  /**
   * @example
   * application/zip
   */
  contentType?: string;
  input?: string;
  /**
   * @example
   * https://example.com/endpoint/aliyun/ai?id=76401125000***
   */
  notifyUrl?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * false
   */
  params?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  pipelineId?: string;
  /**
   * @remarks
   * The priority of the job in the ApsaraVideo Media Processing (MPS) queue to which the job is added. Valid values: 0 to 9. Default value: 5.
   * 
   * @example
   * 5
   */
  priority?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The template ID, which is used to specify the analysis algorithm of the smart tagging job. For more information about how to manage templates, see [AddSmarttagTemplate](https://help.aliyun.com/document_detail/602910.html), [QuerySmarttagTemplateList](https://help.aliyun.com/document_detail/187770.html), [UpdateSmarttagTemplate](https://help.aliyun.com/document_detail/187776.html), and [DeleteSmarttagTemplate](https://help.aliyun.com/document_detail/187775.html).
   * 
   * @example
   * 39f8e0bc005e4f309379701645f4****
   */
  templateId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example-title-****
   */
  title?: string;
  /**
   * @example
   * {"key":"value"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentAddr: 'ContentAddr',
      contentType: 'ContentType',
      input: 'Input',
      notifyUrl: 'NotifyUrl',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      params: 'Params',
      pipelineId: 'PipelineId',
      priority: 'Priority',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateId: 'TemplateId',
      title: 'Title',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentAddr: 'string',
      contentType: 'string',
      input: 'string',
      notifyUrl: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      params: 'string',
      pipelineId: 'string',
      priority: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateId: 'string',
      title: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


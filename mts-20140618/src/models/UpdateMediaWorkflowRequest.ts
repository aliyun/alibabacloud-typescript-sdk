// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMediaWorkflowRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the media workflow that you want to update. To obtain the ID of the media workflow, you can log on to the **ApsaraVideo Media Processing (MPS) console** and choose **Workflows** > **Workflow Settings** in the left-side navigation pane.
   * 
   * This parameter is required.
   * 
   * @example
   * 6307eb0d3f85477882d205aa040f****
   */
  mediaWorkflowId?: string;
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The new topology of the media workflow. The value is a JSON object that contains the activity list and activity dependencies.
   * 
   * > The Object Storage Service (OSS) bucket must reside in the same region as your MPS service.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *       "Activities": {
   *             "Act-Start": {
   *                   "Parameters": {
   *                         "PipelineId": "130266f58161436a80bf07cb12c8****",
   *                         "InputFile": "{\\"Bucket\\": \\"example-bucket-****\\",\\"Location\\": \\"cn-shanghai\\"}"
   *                   },
   *                   "Type": "Start"
   *             },
   *             "Act-Report": {
   *                   "Parameters": {},
   *                   "Type": "Report"
   *             },
   *             "Act-Transcode-M3U8": {
   *                   "Parameters": {
   *                         "Outputs": "[{\\"Object\\":\\"transcode/{ObjectPrefix}{FileName}\\",\\"TemplateId\\": \\"957d1719ee85ed6527b90cf62726****\\"}]",
   *                         "OutputBucket": "example-bucket-****",
   *                         "OutputLocation": "cn-shanghai"
   *                   },
   *                   "Type": "Transcode"
   *             }
   *       },
   *       "Dependencies": {
   *             "Act-Start": [
   *                   "Act-Transcode-M3U8"
   *             ],
   *             "Act-Report": [],
   *             "Act-Transcode-M3U8": [
   *                   "Act-Report"
   *             ]
   *       }
   * }
   */
  topology?: string;
  triggerMode?: string;
  static names(): { [key: string]: string } {
    return {
      mediaWorkflowId: 'MediaWorkflowId',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      topology: 'Topology',
      triggerMode: 'TriggerMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaWorkflowId: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      topology: 'string',
      triggerMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


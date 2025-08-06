// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTranscodeTemplateGroupResponseBodyTranscodeTemplateGroupList extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The time when the template group was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-12-05T10:20:09Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Indicates whether the template group is the default one. Valid values:
   * 
   * *   **Default**: The template group is the default one.
   * *   **NotDefault**: The template group is not the default one.
   * 
   * @example
   * Default
   */
  isDefault?: string;
  /**
   * @remarks
   * The lock status of the transcoding template group. Valid values:
   * 
   * *   **Disabled**: The template group is not locked.
   * *   **Enabled**: The template group is locked.
   * 
   * @example
   * Disabled
   */
  locked?: string;
  /**
   * @remarks
   * The time when the template group was modified. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-12-05T10:22:09Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The name of the template group.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the transcoding template group.
   * 
   * @example
   * 17a9889fc66852*****d791c886700932
   */
  transcodeTemplateGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      creationTime: 'CreationTime',
      isDefault: 'IsDefault',
      locked: 'Locked',
      modifyTime: 'ModifyTime',
      name: 'Name',
      transcodeTemplateGroupId: 'TranscodeTemplateGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      creationTime: 'string',
      isDefault: 'string',
      locked: 'string',
      modifyTime: 'string',
      name: 'string',
      transcodeTemplateGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscodeTemplateGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25818875-5F78-4A*****F6-D7393642CA58
   */
  requestId?: string;
  /**
   * @remarks
   * The transcoding template groups.
   */
  transcodeTemplateGroupList?: ListTranscodeTemplateGroupResponseBodyTranscodeTemplateGroupList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      transcodeTemplateGroupList: 'TranscodeTemplateGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      transcodeTemplateGroupList: { 'type': 'array', 'itemType': ListTranscodeTemplateGroupResponseBodyTranscodeTemplateGroupList },
    };
  }

  validate() {
    if(Array.isArray(this.transcodeTemplateGroupList)) {
      $dara.Model.validateArray(this.transcodeTemplateGroupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


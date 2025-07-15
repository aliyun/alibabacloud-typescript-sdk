// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApplicationGroupResponseBodyApplicationGroup extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * MyApplication
   */
  applicationName?: string;
  /**
   * @remarks
   * The time when the application group was created.
   * 
   * @example
   * 2021-09-07T10:28:25Z
   */
  createdDate?: string;
  /**
   * @remarks
   * The ID of the region in which the related resources reside.
   * 
   * @example
   * cn-hangzhou
   */
  deployRegionId?: string;
  /**
   * @remarks
   * The description of the application group.
   * 
   * @example
   * ApplicationGroup
   */
  description?: string;
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * k1
   */
  importTagKey?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * v1
   */
  importTagValue?: string;
  /**
   * @remarks
   * The name of the application group.
   * 
   * @example
   * UpdateMyApplicationGroup
   */
  name?: string;
  /**
   * @remarks
   * The time when the application group was updated.
   * 
   * @example
   * 2021-09-08T03:01:53Z
   */
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      createdDate: 'CreatedDate',
      deployRegionId: 'DeployRegionId',
      description: 'Description',
      importTagKey: 'ImportTagKey',
      importTagValue: 'ImportTagValue',
      name: 'Name',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      createdDate: 'string',
      deployRegionId: 'string',
      description: 'string',
      importTagKey: 'string',
      importTagValue: 'string',
      name: 'string',
      updatedDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the application group.
   */
  applicationGroup?: UpdateApplicationGroupResponseBodyApplicationGroup;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AA9FA778-AE4B-55EC-81CC-C46BAF08A166
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationGroup: 'ApplicationGroup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationGroup: UpdateApplicationGroupResponseBodyApplicationGroup,
      requestId: 'string',
    };
  }

  validate() {
    if(this.applicationGroup && typeof (this.applicationGroup as any).validate === 'function') {
      (this.applicationGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


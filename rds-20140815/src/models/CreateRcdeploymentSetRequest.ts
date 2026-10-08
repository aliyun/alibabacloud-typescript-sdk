// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRCDeploymentSetRequestTag extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRCDeploymentSetRequest extends $dara.Model {
  clientToken?: string;
  deploymentSetName?: string;
  description?: string;
  groupCount?: number;
  onUnableToRedeployFailedInstance?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  strategy?: string;
  tag?: CreateRCDeploymentSetRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      deploymentSetName: 'DeploymentSetName',
      description: 'Description',
      groupCount: 'GroupCount',
      onUnableToRedeployFailedInstance: 'OnUnableToRedeployFailedInstance',
      regionId: 'RegionId',
      strategy: 'Strategy',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      deploymentSetName: 'string',
      description: 'string',
      groupCount: 'number',
      onUnableToRedeployFailedInstance: 'string',
      regionId: 'string',
      strategy: 'string',
      tag: { 'type': 'array', 'itemType': CreateRCDeploymentSetRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


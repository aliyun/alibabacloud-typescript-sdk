// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations of application alerts.
   */
  alarmConfigShrink?: string;
  /**
   * @remarks
   * The source of application.
   * 
   * @example
   * {"Platform":"github","Owner":"githubUser","RepoName":"githubUser/repoName"}
   */
  applicationSource?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * TF-CreateApplication-1647587475-84104b89-eba5-47a8-b2fd-807b8b7d
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * application
   */
  description?: string;
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * MyApplication
   */
  name?: string;
  /**
   * @remarks
   * The region ID. Set the value to cn-hangzhou.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxsn4m******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the Compute Nest service that corresponds to the application template.
   * 
   * @example
   * service-79538e30e44541b699d8
   */
  serviceId?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {"k1":"v1","k2":"v2"}
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      alarmConfigShrink: 'AlarmConfig',
      applicationSource: 'ApplicationSource',
      clientToken: 'ClientToken',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      serviceId: 'ServiceId',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmConfigShrink: 'string',
      applicationSource: 'string',
      clientToken: 'string',
      description: 'string',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      serviceId: 'string',
      tagsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


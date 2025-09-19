// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddUninstallClientsByUuidsRequest extends $dara.Model {
  /**
   * @remarks
   * The method name. Default value: init.
   * 
   * @example
   * init
   */
  callMethod?: string;
  /**
   * @remarks
   * The feedback.
   * 
   * @example
   * reinstall
   */
  feedback?: string;
  /**
   * @remarks
   * The region in which the server resides.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The source IP address of the request. You do not need to specify this parameter. It is automatically obtained by the system.
   * 
   * @example
   * 1.2.XXX.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The UUID of the server that you want to unbind. Separate multiple UUIDs with commas (,).
   * 
   * >  You can call the [DescribeCloudCenterInstances](https://help.aliyun.com/document_detail/141932.html) operation to query the UUIDs of servers.
   * 
   * This parameter is required.
   * 
   * @example
   * inet-183707ae-3bdf-4db0-b771-3e9962bf****,inet-49dceccc-4f01-469b-8411-2416ea12****
   */
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      callMethod: 'CallMethod',
      feedback: 'Feedback',
      region: 'Region',
      sourceIp: 'SourceIp',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callMethod: 'string',
      feedback: 'string',
      region: 'string',
      sourceIp: 'string',
      uuids: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


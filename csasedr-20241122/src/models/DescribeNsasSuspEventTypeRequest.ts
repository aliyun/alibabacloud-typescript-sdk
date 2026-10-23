// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNsasSuspEventTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The container field. This parameter is not supported by SASE-EDR.
   * 
   * @example
   * clusterId
   */
  containerFieldName?: string;
  /**
   * @remarks
   * The value of the container field. This parameter is not supported by SASE-EDR.
   * 
   * @example
   * ca3108551c83c4d949106e1ab9e1e****
   */
  containerFieldValue?: string;
  /**
   * @remarks
   * The language of the request and response messages. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The name of the security alert type.
   * 
   * @example
   * Unusual Logon
   */
  name?: string;
  /**
   * @remarks
   * The name or IP address of the server.
   * 
   * @example
   * testECS
   */
  remark?: string;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 180.212.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The UUIDs of the servers. Separate multiple UUIDs with commas (,).
   * 
   * @example
   * f56406cb-916d-42db-b6f7-2ff79e34****
   */
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      containerFieldName: 'ContainerFieldName',
      containerFieldValue: 'ContainerFieldValue',
      lang: 'Lang',
      name: 'Name',
      remark: 'Remark',
      sourceIp: 'SourceIp',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerFieldName: 'string',
      containerFieldValue: 'string',
      lang: 'string',
      name: 'string',
      remark: 'string',
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


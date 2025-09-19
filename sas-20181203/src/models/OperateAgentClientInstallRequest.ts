// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateAgentClientInstallRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the servers on which you want to install the Security Center agent. Separate multiple IDs with commas (,).
   * 
   * > : You must specify at least one of **InstanceIds** and **Uuids**. If you specify **InstanceIds**, you must also specify **Region** and **Os**.
   * 
   * @example
   * i-uf6j8vq9l4r5ntht****
   */
  instanceIds?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The operating system of the servers. Valid values:
   * 
   * *   **linux**
   * *   **windows**
   * 
   * @example
   * linux
   */
  os?: string;
  /**
   * @remarks
   * The region where the servers reside. Valid values include the following regions:
   * 
   * *   cn-hangzhou: China (Hangzhou)
   * *   cn-beijing: China (Beijing)
   * *   cn-shanghai: China (Shanghai)
   * *   cn-zhangjiakou: China (Zhangjiakou)
   * *   cn-shenzhen: China (Shenzhen)
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The UUIDs of the servers on which you want to install the Security Center agent. Separate multiple UUIDs with commas (,).
   * 
   * > You must specify at least one of the **InstanceIds** and **Uuids** parameters before you can call this operation.
   * 
   * @example
   * 1587bedb-fdb4-48c4-9330-************
   */
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      lang: 'Lang',
      os: 'Os',
      region: 'Region',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
      lang: 'string',
      os: 'string',
      region: 'string',
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


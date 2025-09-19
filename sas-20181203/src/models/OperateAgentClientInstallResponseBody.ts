// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateAgentClientInstallResponseBodyAegisCelintInstallResposeList extends $dara.Model {
  /**
   * @remarks
   * The ID of the server.
   * 
   * @example
   * i-uf6j8vq9l4r5ntht****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the installation task.
   * 
   * @example
   * 2856
   */
  recordId?: number;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * 1587bedb-fdb4-48c4-9330-****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      recordId: 'RecordId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      recordId: 'number',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateAgentClientInstallResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the returned results.
   */
  aegisCelintInstallResposeList?: OperateAgentClientInstallResponseBodyAegisCelintInstallResposeList[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * AE79B457-877C-51C6-AD72-0D34A025D***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aegisCelintInstallResposeList: 'AegisCelintInstallResposeList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aegisCelintInstallResposeList: { 'type': 'array', 'itemType': OperateAgentClientInstallResponseBodyAegisCelintInstallResposeList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aegisCelintInstallResposeList)) {
      $dara.Model.validateArray(this.aegisCelintInstallResposeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


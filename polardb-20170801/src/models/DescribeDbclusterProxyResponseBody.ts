// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterProxyResponseBodyChildInstances extends $dara.Model {
  /**
   * @example
   * polar.mysql.g4.medium
   */
  DBNodeClass?: string;
  /**
   * @example
   * 10.*.*10
   */
  DBNodeIP?: string;
  /**
   * @example
   * pi-wz97h479y364g9du7
   */
  DBNodeId?: string;
  /**
   * @example
   * 2450
   */
  DBNodePort?: string;
  /**
   * @example
   * Running
   */
  DBNodeStatus?: string;
  /**
   * @example
   * sh-lsf01-144-37
   */
  hostName?: string;
  static names(): { [key: string]: string } {
    return {
      DBNodeClass: 'DBNodeClass',
      DBNodeIP: 'DBNodeIP',
      DBNodeId: 'DBNodeId',
      DBNodePort: 'DBNodePort',
      DBNodeStatus: 'DBNodeStatus',
      hostName: 'HostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeClass: 'string',
      DBNodeIP: 'string',
      DBNodeId: 'string',
      DBNodePort: 'string',
      DBNodeStatus: 'string',
      hostName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterProxyResponseBody extends $dara.Model {
  childInstances?: DescribeDBClusterProxyResponseBodyChildInstances[];
  /**
   * @example
   * pe-xxxxxxxxx
   */
  DBProxyClusterId?: string;
  /**
   * @example
   * 2
   */
  DBProxyClusterNum?: number;
  /**
   * @example
   * ClassChanging
   */
  DBProxyClusterStatus?: string;
  /**
   * @example
   * 30E11ED2-C922-5B96-BCC6-11EE8C484AC6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      childInstances: 'ChildInstances',
      DBProxyClusterId: 'DBProxyClusterId',
      DBProxyClusterNum: 'DBProxyClusterNum',
      DBProxyClusterStatus: 'DBProxyClusterStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childInstances: { 'type': 'array', 'itemType': DescribeDBClusterProxyResponseBodyChildInstances },
      DBProxyClusterId: 'string',
      DBProxyClusterNum: 'number',
      DBProxyClusterStatus: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.childInstances)) {
      $dara.Model.validateArray(this.childInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


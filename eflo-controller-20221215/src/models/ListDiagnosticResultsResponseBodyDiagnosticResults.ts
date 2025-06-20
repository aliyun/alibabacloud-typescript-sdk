// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDiagnosticResultsResponseBodyDiagnosticResults extends $dara.Model {
  /**
   * @example
   * i118578141694745246055
   */
  clusterId?: string;
  /**
   * @example
   * pjlab-lingjun
   */
  clusterName?: string;
  /**
   * @example
   * 2024-01-15T02:01:12Z
   */
  creationTime?: string;
  /**
   * @example
   * diagcontent
   */
  diagContent?: string;
  /**
   * @example
   * 123
   */
  diagId?: string;
  /**
   * @example
   * Success
   */
  diagResult?: string;
  /**
   * @example
   * 2024-10-16T02:04Z
   */
  finishedTime?: string;
  /**
   * @example
   * e01-cn-bl03ofg6206
   */
  resourceId?: string;
  /**
   * @example
   * proxy-rps.mos.csvw.com
   */
  serverName?: string;
  /**
   * @example
   * succeed
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      creationTime: 'CreationTime',
      diagContent: 'DiagContent',
      diagId: 'DiagId',
      diagResult: 'DiagResult',
      finishedTime: 'FinishedTime',
      resourceId: 'ResourceId',
      serverName: 'ServerName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      creationTime: 'string',
      diagContent: 'string',
      diagId: 'string',
      diagResult: 'string',
      finishedTime: 'string',
      resourceId: 'string',
      serverName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


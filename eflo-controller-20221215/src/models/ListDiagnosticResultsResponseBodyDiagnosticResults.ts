// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDiagnosticResultsResponseBodyDiagnosticResults extends $dara.Model {
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * i118578141694745246055
   */
  clusterId?: string;
  /**
   * @remarks
   * Cluster name
   * 
   * @example
   * pjlab-lingjun
   */
  clusterName?: string;
  /**
   * @remarks
   * Creation time of the diagnostic task.
   * 
   * @example
   * 2024-01-15T02:01:12Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Diagnosis content. For example, in network diagnosis, there are static configuration checks, dynamic operation checks, etc.
   * 
   * @example
   * diagcontent
   */
  diagContent?: string;
  /**
   * @remarks
   * Diagnosis ID
   * 
   * @example
   * 123
   */
  diagId?: string;
  /**
   * @remarks
   * Diagnosis result, success or failure.
   * 
   * @example
   * Success
   */
  diagResult?: string;
  /**
   * @remarks
   * Completion time of the diagnostic task.
   * 
   * @example
   * 2024-10-16T02:04Z
   */
  finishedTime?: string;
  /**
   * @remarks
   * Resource ID
   * 
   * @example
   * e01-cn-bl03ofg6206
   */
  resourceId?: string;
  /**
   * @remarks
   * Service name.
   * 
   * @example
   * proxy-rps.mos.csvw.com
   */
  serverName?: string;
  /**
   * @remarks
   * Governance status
   * 
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


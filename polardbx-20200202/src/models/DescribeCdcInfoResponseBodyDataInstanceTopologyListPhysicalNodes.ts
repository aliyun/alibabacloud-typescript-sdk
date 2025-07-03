// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdcInfoResponseBodyDataInstanceTopologyListPhysicalNodes extends $dara.Model {
  /**
   * @example
   * cn-hangzhou-h
   */
  AZone?: string;
  /**
   * @example
   * 204800
   */
  disk?: number;
  /**
   * @example
   * polarx.x4.large.2e.cdc
   */
  nodeClass?: string;
  /**
   * @example
   * ***
   */
  nodeId?: string;
  /**
   * @example
   * pxc-c-***
   */
  nodeName?: string;
  /**
   * @example
   * ACTIVATION
   */
  status?: string;
  /**
   * @example
   * polarx-cdc-kernel-***
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      AZone: 'AZone',
      disk: 'Disk',
      nodeClass: 'NodeClass',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AZone: 'string',
      disk: 'number',
      nodeClass: 'string',
      nodeId: 'string',
      nodeName: 'string',
      status: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


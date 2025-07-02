// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Tag } from "./Tag";
import { AckConfigPvcs } from "./AckConfigPvcs";
import { Toleration } from "./Toleration";
import { AckConfigVolumeMounts } from "./AckConfigVolumeMounts";
import { AckConfigVolumes } from "./AckConfigVolumes";


export class AckConfig extends $dara.Model {
  /**
   * @remarks
   * ack集群id
   */
  ackInstanceId?: string;
  customAnnotations?: Tag[];
  customLabels?: Tag[];
  dataDiskSize?: number;
  dataDiskStorageClass?: string;
  /**
   * @remarks
   * Pod的CPU限制值。
   */
  limitCpu?: number;
  /**
   * @remarks
   * Pod的内存限制值。
   */
  limitMemory?: number;
  mountHostCgroup?: boolean;
  /**
   * @remarks
   * ack 命名空间
   */
  namespace?: string;
  nodeAffinity?: string;
  /**
   * @remarks
   * ack的节点标签限制
   */
  nodeSelectors?: Tag[];
  podAffinity?: string;
  podAntiAffinity?: string;
  preStartCommand?: string[];
  pvcs?: AckConfigPvcs[];
  /**
   * @remarks
   * Pod的CPU请求值
   */
  requestCpu?: number;
  /**
   * @remarks
   * Pod的内存请求值。
   */
  requestMemory?: number;
  /**
   * @remarks
   * ack的节点污点容忍
   */
  tolerations?: Toleration[];
  volumeMounts?: AckConfigVolumeMounts[];
  volumes?: AckConfigVolumes[];
  static names(): { [key: string]: string } {
    return {
      ackInstanceId: 'AckInstanceId',
      customAnnotations: 'CustomAnnotations',
      customLabels: 'CustomLabels',
      dataDiskSize: 'DataDiskSize',
      dataDiskStorageClass: 'DataDiskStorageClass',
      limitCpu: 'LimitCpu',
      limitMemory: 'LimitMemory',
      mountHostCgroup: 'MountHostCgroup',
      namespace: 'Namespace',
      nodeAffinity: 'NodeAffinity',
      nodeSelectors: 'NodeSelectors',
      podAffinity: 'PodAffinity',
      podAntiAffinity: 'PodAntiAffinity',
      preStartCommand: 'PreStartCommand',
      pvcs: 'Pvcs',
      requestCpu: 'RequestCpu',
      requestMemory: 'RequestMemory',
      tolerations: 'Tolerations',
      volumeMounts: 'VolumeMounts',
      volumes: 'Volumes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ackInstanceId: 'string',
      customAnnotations: { 'type': 'array', 'itemType': Tag },
      customLabels: { 'type': 'array', 'itemType': Tag },
      dataDiskSize: 'number',
      dataDiskStorageClass: 'string',
      limitCpu: 'number',
      limitMemory: 'number',
      mountHostCgroup: 'boolean',
      namespace: 'string',
      nodeAffinity: 'string',
      nodeSelectors: { 'type': 'array', 'itemType': Tag },
      podAffinity: 'string',
      podAntiAffinity: 'string',
      preStartCommand: { 'type': 'array', 'itemType': 'string' },
      pvcs: { 'type': 'array', 'itemType': AckConfigPvcs },
      requestCpu: 'number',
      requestMemory: 'number',
      tolerations: { 'type': 'array', 'itemType': Toleration },
      volumeMounts: { 'type': 'array', 'itemType': AckConfigVolumeMounts },
      volumes: { 'type': 'array', 'itemType': AckConfigVolumes },
    };
  }

  validate() {
    if(Array.isArray(this.customAnnotations)) {
      $dara.Model.validateArray(this.customAnnotations);
    }
    if(Array.isArray(this.customLabels)) {
      $dara.Model.validateArray(this.customLabels);
    }
    if(Array.isArray(this.nodeSelectors)) {
      $dara.Model.validateArray(this.nodeSelectors);
    }
    if(Array.isArray(this.preStartCommand)) {
      $dara.Model.validateArray(this.preStartCommand);
    }
    if(Array.isArray(this.pvcs)) {
      $dara.Model.validateArray(this.pvcs);
    }
    if(Array.isArray(this.tolerations)) {
      $dara.Model.validateArray(this.tolerations);
    }
    if(Array.isArray(this.volumeMounts)) {
      $dara.Model.validateArray(this.volumeMounts);
    }
    if(Array.isArray(this.volumes)) {
      $dara.Model.validateArray(this.volumes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


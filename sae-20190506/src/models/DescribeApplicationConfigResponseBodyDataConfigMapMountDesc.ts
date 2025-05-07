// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationConfigResponseBodyDataConfigMapMountDesc extends $dara.Model {
  /**
   * @remarks
   * The ID of the ConfigMap.
   * 
   * @example
   * 1
   */
  configMapId?: number;
  /**
   * @remarks
   * The name of the ConfigMap.
   * 
   * @example
   * test
   */
  configMapName?: string;
  /**
   * @remarks
   * The key-value pair that is stored in the ConfigMap.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The path on which the ConfigMap is mounted.
   * 
   * @example
   * /tmp
   */
  mountPath?: string;
  static names(): { [key: string]: string } {
    return {
      configMapId: 'ConfigMapId',
      configMapName: 'ConfigMapName',
      key: 'Key',
      mountPath: 'MountPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMapId: 'number',
      configMapName: 'string',
      key: 'string',
      mountPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


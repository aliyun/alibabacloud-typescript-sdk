// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InnerSandboxVolumeMountAgenticFsMountPoints extends $dara.Model {
  /**
   * @remarks
   * The access point ID.
   * 
   * @example
   * ap-xxxx
   */
  accessPointID?: string;
  /**
   * @remarks
   * The AgenticSpace workspace ID.
   * 
   * @example
   * agentic-xxxx
   */
  agenticSpaceID?: string;
  /**
   * @remarks
   * The file system ID.
   * 
   * @example
   * 03204sl2qjiax4oxxxx
   */
  fileSystemID?: string;
  /**
   * @remarks
   * The local mount directory.
   * 
   * @example
   * /mnt/agenticfs
   */
  mountDir?: string;
  /**
   * @remarks
   * The access point mount address.
   * 
   * @example
   * ap-xxxx.xxxx-ljs60.cn-shanghai.nas.aliyuncs.com
   */
  serverAddr?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointID: 'accessPointID',
      agenticSpaceID: 'agenticSpaceID',
      fileSystemID: 'fileSystemID',
      mountDir: 'mountDir',
      serverAddr: 'serverAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointID: 'string',
      agenticSpaceID: 'string',
      fileSystemID: 'string',
      mountDir: 'string',
      serverAddr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerSandboxVolumeMountAgenticFs extends $dara.Model {
  /**
   * @remarks
   * The local mount group ID.
   * 
   * @example
   * 1000
   */
  groupID?: number;
  /**
   * @remarks
   * The AgenticFS mount point configuration.
   */
  mountPoints?: InnerSandboxVolumeMountAgenticFsMountPoints[];
  /**
   * @remarks
   * The local mount user ID.
   * 
   * @example
   * 1000
   */
  userID?: number;
  static names(): { [key: string]: string } {
    return {
      groupID: 'groupID',
      mountPoints: 'mountPoints',
      userID: 'userID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupID: 'number',
      mountPoints: { 'type': 'array', 'itemType': InnerSandboxVolumeMountAgenticFsMountPoints },
      userID: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.mountPoints)) {
      $dara.Model.validateArray(this.mountPoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerSandboxVolumeMountNamedMountPoints extends $dara.Model {
  /**
   * @remarks
   * The local mount directory.
   * 
   * @example
   * /mnt/named
   */
  mountDir?: string;
  /**
   * @remarks
   * The volume name.
   * 
   * @example
   * workspace
   */
  volumeName?: string;
  static names(): { [key: string]: string } {
    return {
      mountDir: 'mountDir',
      volumeName: 'volumeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountDir: 'string',
      volumeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerSandboxVolumeMountNamed extends $dara.Model {
  /**
   * @remarks
   * The mount point configuration.
   */
  mountPoints?: InnerSandboxVolumeMountNamedMountPoints[];
  static names(): { [key: string]: string } {
    return {
      mountPoints: 'mountPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPoints: { 'type': 'array', 'itemType': InnerSandboxVolumeMountNamedMountPoints },
    };
  }

  validate() {
    if(Array.isArray(this.mountPoints)) {
      $dara.Model.validateArray(this.mountPoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerSandboxVolumeMountOssMountPoints extends $dara.Model {
  /**
   * @remarks
   * The bucket name.
   * 
   * @example
   * oss-bucket-test
   */
  bucketName?: string;
  /**
   * @remarks
   * The OSS bucket path to mount.
   * 
   * @example
   * /
   */
  bucketPath?: string;
  /**
   * @remarks
   * The OSS endpoint address.
   * 
   * @example
   * oss-cn-shenzhen-internal.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The local mount directory.
   * 
   * @example
   * /mnt/oss
   */
  mountDir?: string;
  /**
   * @remarks
   * Specifies whether the mount is read-only. Valid values:
   * 
   * - **true**: Read-only.
   * 
   * - **false**: Not read-only.
   * 
   * @example
   * true
   */
  readOnly?: boolean;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'bucketName',
      bucketPath: 'bucketPath',
      endpoint: 'endpoint',
      mountDir: 'mountDir',
      readOnly: 'readOnly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      bucketPath: 'string',
      endpoint: 'string',
      mountDir: 'string',
      readOnly: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerSandboxVolumeMountOss extends $dara.Model {
  /**
   * @remarks
   * The mount point configuration.
   */
  mountPoints?: InnerSandboxVolumeMountOssMountPoints[];
  static names(): { [key: string]: string } {
    return {
      mountPoints: 'mountPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPoints: { 'type': 'array', 'itemType': InnerSandboxVolumeMountOssMountPoints },
    };
  }

  validate() {
    if(Array.isArray(this.mountPoints)) {
      $dara.Model.validateArray(this.mountPoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerSandboxVolumeMount extends $dara.Model {
  /**
   * @remarks
   * The AgenticFS mount configuration.
   */
  agenticFs?: InnerSandboxVolumeMountAgenticFs;
  /**
   * @remarks
   * The predefined volume mount configuration.
   */
  named?: InnerSandboxVolumeMountNamed;
  /**
   * @remarks
   * The OSS mount configuration.
   */
  oss?: InnerSandboxVolumeMountOss;
  static names(): { [key: string]: string } {
    return {
      agenticFs: 'agenticFs',
      named: 'named',
      oss: 'oss',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agenticFs: InnerSandboxVolumeMountAgenticFs,
      named: InnerSandboxVolumeMountNamed,
      oss: InnerSandboxVolumeMountOss,
    };
  }

  validate() {
    if(this.agenticFs && typeof (this.agenticFs as any).validate === 'function') {
      (this.agenticFs as any).validate();
    }
    if(this.named && typeof (this.named as any).validate === 'function') {
      (this.named as any).validate();
    }
    if(this.oss && typeof (this.oss as any).validate === 'function') {
      (this.oss as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InnerCreateSandboxVolumeMountsAgenticFsMountPoints extends $dara.Model {
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
   * The AgenticFS access point address.
   * 
   * @example
   * ap-xxxx.03204sl2qjiax4ocdt2-ljs60.cn-shanghai.nas.aliyuncs.com
   */
  serverAddr?: string;
  static names(): { [key: string]: string } {
    return {
      mountDir: 'mountDir',
      serverAddr: 'serverAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class InnerCreateSandboxVolumeMountsAgenticFs extends $dara.Model {
  /**
   * @remarks
   * The group ID for the local mount.
   * 
   * @example
   * 1000
   */
  groupID?: number;
  /**
   * @remarks
   * The mount point configuration.
   */
  mountPoints?: InnerCreateSandboxVolumeMountsAgenticFsMountPoints[];
  /**
   * @remarks
   * The user ID for the local mount.
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
      mountPoints: { 'type': 'array', 'itemType': InnerCreateSandboxVolumeMountsAgenticFsMountPoints },
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

export class InnerCreateSandboxVolumeMountsNamedMountPoints extends $dara.Model {
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

export class InnerCreateSandboxVolumeMountsNamed extends $dara.Model {
  /**
   * @remarks
   * The mount point configuration.
   */
  mountPoints?: InnerCreateSandboxVolumeMountsNamedMountPoints[];
  static names(): { [key: string]: string } {
    return {
      mountPoints: 'mountPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPoints: { 'type': 'array', 'itemType': InnerCreateSandboxVolumeMountsNamedMountPoints },
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

export class InnerCreateSandboxVolumeMountsOssMountPoints extends $dara.Model {
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
   * The endpoint URL of OSS.
   * 
   * @example
   * https://oss-cn-shenzhen-internal.aliyuncs.com
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
   * - true: Read-only.
   * - false: Read and write.
   * 
   * @example
   * false
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

export class InnerCreateSandboxVolumeMountsOss extends $dara.Model {
  /**
   * @remarks
   * The mount point configuration.
   */
  mountPoints?: InnerCreateSandboxVolumeMountsOssMountPoints[];
  static names(): { [key: string]: string } {
    return {
      mountPoints: 'mountPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPoints: { 'type': 'array', 'itemType': InnerCreateSandboxVolumeMountsOssMountPoints },
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

export class InnerCreateSandboxVolumeMounts extends $dara.Model {
  /**
   * @remarks
   * The AgenticFS mount configuration.
   */
  agenticFs?: InnerCreateSandboxVolumeMountsAgenticFs;
  /**
   * @remarks
   * The predefined volume mount configuration.
   */
  named?: InnerCreateSandboxVolumeMountsNamed;
  /**
   * @remarks
   * The OSS mount configuration.
   */
  oss?: InnerCreateSandboxVolumeMountsOss;
  static names(): { [key: string]: string } {
    return {
      agenticFs: 'agenticFs',
      named: 'named',
      oss: 'oss',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agenticFs: InnerCreateSandboxVolumeMountsAgenticFs,
      named: InnerCreateSandboxVolumeMountsNamed,
      oss: InnerCreateSandboxVolumeMountsOss,
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


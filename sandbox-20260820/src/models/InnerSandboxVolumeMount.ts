// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InnerSandboxVolumeMountAgenticFsMountPoints extends $dara.Model {
  /**
   * @example
   * ap-xxxx
   */
  accessPointID?: string;
  /**
   * @example
   * agentic-xxxx
   */
  agenticSpaceID?: string;
  /**
   * @example
   * 03204sl2qjiax4oxxxx
   */
  fileSystemID?: string;
  /**
   * @example
   * /mnt/agenticfs
   */
  mountDir?: string;
  /**
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
   * @example
   * 1000
   */
  groupID?: number;
  mountPoints?: InnerSandboxVolumeMountAgenticFsMountPoints[];
  /**
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
   * @example
   * /mnt/named
   */
  mountDir?: string;
  /**
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
   * @example
   * oss-bucket-test
   */
  bucketName?: string;
  /**
   * @example
   * /
   */
  bucketPath?: string;
  /**
   * @example
   * oss-cn-shenzhen-internal.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @example
   * /mnt/oss
   */
  mountDir?: string;
  /**
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
  agenticFs?: InnerSandboxVolumeMountAgenticFs;
  named?: InnerSandboxVolumeMountNamed;
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


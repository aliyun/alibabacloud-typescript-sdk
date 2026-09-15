// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InnerSandboxVolumeMountAgenticFsMountPoints extends $dara.Model {
  accessPointID?: string;
  agenticSpaceID?: string;
  fileSystemID?: string;
  mountDir?: string;
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
  groupID?: number;
  mountPoints?: InnerSandboxVolumeMountAgenticFsMountPoints[];
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
  mountDir?: string;
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
  bucketName?: string;
  bucketPath?: string;
  endpoint?: string;
  mountDir?: string;
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


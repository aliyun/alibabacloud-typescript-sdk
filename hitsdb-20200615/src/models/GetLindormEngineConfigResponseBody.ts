// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLindormEngineConfigResponseBodyEngineConfigsConfigFilesConfigItems extends $dara.Model {
  configItemKey?: string;
  configItemValue?: string;
  static names(): { [key: string]: string } {
    return {
      configItemKey: 'ConfigItemKey',
      configItemValue: 'ConfigItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configItemKey: 'string',
      configItemValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLindormEngineConfigResponseBodyEngineConfigsConfigFiles extends $dara.Model {
  configItems?: GetLindormEngineConfigResponseBodyEngineConfigsConfigFilesConfigItems[];
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      configItems: 'ConfigItems',
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configItems: { 'type': 'array', 'itemType': GetLindormEngineConfigResponseBodyEngineConfigsConfigFilesConfigItems },
      fileName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configItems)) {
      $dara.Model.validateArray(this.configItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLindormEngineConfigResponseBodyEngineConfigs extends $dara.Model {
  configFiles?: GetLindormEngineConfigResponseBodyEngineConfigsConfigFiles[];
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      configFiles: 'ConfigFiles',
      engine: 'Engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configFiles: { 'type': 'array', 'itemType': GetLindormEngineConfigResponseBodyEngineConfigsConfigFiles },
      engine: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configFiles)) {
      $dara.Model.validateArray(this.configFiles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLindormEngineConfigResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  engineConfigs?: GetLindormEngineConfigResponseBodyEngineConfigs[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      engineConfigs: 'EngineConfigs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      engineConfigs: { 'type': 'array', 'itemType': GetLindormEngineConfigResponseBodyEngineConfigs },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.engineConfigs)) {
      $dara.Model.validateArray(this.engineConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EmbedderConfigConfig extends $dara.Model {
  model?: string;
  static names(): { [key: string]: string } {
    return {
      model: 'model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      model: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EmbedderConfig extends $dara.Model {
  config?: EmbedderConfigConfig;
  modelServiceName?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      modelServiceName: 'modelServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: EmbedderConfigConfig,
      modelServiceName: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


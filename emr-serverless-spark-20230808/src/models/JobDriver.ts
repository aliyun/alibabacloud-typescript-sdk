// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JobDriverSparkSubmit extends $dara.Model {
  entryPoint?: string;
  entryPointArguments?: string[];
  sparkSubmitParameters?: string;
  static names(): { [key: string]: string } {
    return {
      entryPoint: 'entryPoint',
      entryPointArguments: 'entryPointArguments',
      sparkSubmitParameters: 'sparkSubmitParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entryPoint: 'string',
      entryPointArguments: { 'type': 'array', 'itemType': 'string' },
      sparkSubmitParameters: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.entryPointArguments)) {
      $dara.Model.validateArray(this.entryPointArguments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobDriver extends $dara.Model {
  sparkSubmit?: JobDriverSparkSubmit;
  static names(): { [key: string]: string } {
    return {
      sparkSubmit: 'sparkSubmit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sparkSubmit: JobDriverSparkSubmit,
    };
  }

  validate() {
    if(this.sparkSubmit && typeof (this.sparkSubmit as any).validate === 'function') {
      (this.sparkSubmit as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


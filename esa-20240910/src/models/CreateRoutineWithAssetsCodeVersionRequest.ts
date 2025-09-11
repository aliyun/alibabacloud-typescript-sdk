// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRoutineWithAssetsCodeVersionRequestConfOptions extends $dara.Model {
  notFoundStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      notFoundStrategy: 'NotFoundStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notFoundStrategy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoutineWithAssetsCodeVersionRequest extends $dara.Model {
  buildId?: number;
  codeDescription?: string;
  confOptions?: CreateRoutineWithAssetsCodeVersionRequestConfOptions;
  extraInfo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      buildId: 'BuildId',
      codeDescription: 'CodeDescription',
      confOptions: 'ConfOptions',
      extraInfo: 'ExtraInfo',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildId: 'number',
      codeDescription: 'string',
      confOptions: CreateRoutineWithAssetsCodeVersionRequestConfOptions,
      extraInfo: 'string',
      name: 'string',
    };
  }

  validate() {
    if(this.confOptions && typeof (this.confOptions as any).validate === 'function') {
      (this.confOptions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


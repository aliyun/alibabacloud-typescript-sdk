// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRoutineCodeVersionInfoResponseBodyConfOptions extends $dara.Model {
  /**
   * @remarks
   * The NotFoundStrategy configuration item.
   * 
   * @example
   * SinglePageApplication
   */
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

export class GetRoutineCodeVersionInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The build ID of the code.
   * 
   * @example
   * 26035169
   */
  buildId?: number;
  /**
   * @remarks
   * The description of the code version.
   * 
   * @example
   * code desc version unstable
   */
  codeDescription?: string;
  /**
   * @remarks
   * The code version number.
   * 
   * @example
   * 1710120201067203242
   */
  codeVersion?: string;
  /**
   * @remarks
   * The list of configuration items for the code version.
   */
  confOptions?: GetRoutineCodeVersionInfoResponseBodyConfOptions;
  /**
   * @remarks
   * The time when the code version was created.
   * 
   * @example
   * 2025-08-04T01:54:19Z
   */
  createTime?: string;
  /**
   * @remarks
   * The additional information about the code version. The value is in JSON string format.
   * 
   * @example
   * {}
   */
  extraInfo?: string;
  /**
   * @remarks
   * Indicates whether the code version contains asset files.
   * 
   * @example
   * true
   */
  hasAssets?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the code version.
   * 
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      buildId: 'BuildId',
      codeDescription: 'CodeDescription',
      codeVersion: 'CodeVersion',
      confOptions: 'ConfOptions',
      createTime: 'CreateTime',
      extraInfo: 'ExtraInfo',
      hasAssets: 'HasAssets',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildId: 'number',
      codeDescription: 'string',
      codeVersion: 'string',
      confOptions: GetRoutineCodeVersionInfoResponseBodyConfOptions,
      createTime: 'string',
      extraInfo: 'string',
      hasAssets: 'boolean',
      requestId: 'string',
      status: 'string',
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


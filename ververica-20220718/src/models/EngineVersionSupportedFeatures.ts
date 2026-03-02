// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EngineVersionSupportedFeatures extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the engine version can be used to create a native savepoint.
   * 
   * @example
   * true
   */
  supportNativeSavepoint?: boolean;
  /**
   * @remarks
   * Specifies whether the engine version can be used to submit an SQL deployment.
   * 
   * @example
   * true
   */
  useForSqlDeployments?: boolean;
  static names(): { [key: string]: string } {
    return {
      supportNativeSavepoint: 'supportNativeSavepoint',
      useForSqlDeployments: 'useForSqlDeployments',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportNativeSavepoint: 'boolean',
      useForSqlDeployments: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


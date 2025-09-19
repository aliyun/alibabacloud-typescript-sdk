// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWebPathRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration of the web directory. The value of this parameter is in the JSON format and contains the following fields:
   * 
   * *   **webPathType**: the type of the web directory
   * *   **webPath**: the web directory
   * 
   * @example
   * {
   *       "webPathType": "customize",
   *       "webPath": "/root/www****"
   * }
   */
  config?: string;
  /**
   * @remarks
   * The protected asset to which the web directory belongs. The value of this parameter is in the JSON format and contains the following fields:
   * 
   * *   **target**: the protected asset.
   * *   **targetType**: the type of the asset. Set the value to uuid.
   * *   **flag**: the type of the operation.
   * 
   * @example
   * [{"target":"0186127a-d33e-4d0c-94fb-8f25f87bc69f","targetType":"uuid","flag":"add"}]
   */
  target?: string;
  /**
   * @remarks
   * The type of the configuration item. Set the value to **web_path**.
   * 
   * @example
   * web_path
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      target: 'Target',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      target: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


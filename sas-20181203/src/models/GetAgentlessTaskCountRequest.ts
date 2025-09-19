// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentlessTaskCountRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the asset.
   * 
   * @example
   * s-m5edddcwq7d57d******
   */
  target?: string;
  /**
   * @remarks
   * Specifies the type of the object being inspected. Valid values:
   * 
   * *   **3**: User Snapshot.
   * *   **4**: User Image.
   * 
   * @example
   * 3
   */
  targetType?: number;
  static names(): { [key: string]: string } {
    return {
      target: 'Target',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      target: 'string',
      targetType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


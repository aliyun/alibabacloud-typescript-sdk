// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartupDependency extends $dara.Model {
  /**
   * @remarks
   * The minimum number of dependent roles that must reach the expected phase to be considered satisfied.
   * 
   * @example
   * 1
   */
  minReplicas?: string;
  /**
   * @remarks
   * The phase that dependent roles must reach to be considered satisfied.
   * 
   * @example
   * ServiceReady
   */
  onPhase?: string;
  /**
   * @remarks
   * The type of the dependent role.
   * 
   * @example
   * Worker
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      minReplicas: 'MinReplicas',
      onPhase: 'OnPhase',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      minReplicas: 'string',
      onPhase: 'string',
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


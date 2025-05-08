// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceRequestUpdateOption extends $dara.Model {
  /**
   * @remarks
   * Whether to update artifact.
   * 
   * @example
   * true
   */
  updateArtifact?: boolean;
  /**
   * @remarks
   * Update from. Valid values:
   * 
   * - CODE
   * - PARAMETERS
   * 
   * @example
   * PARAMETERS
   */
  updateFrom?: string;
  static names(): { [key: string]: string } {
    return {
      updateArtifact: 'UpdateArtifact',
      updateFrom: 'UpdateFrom',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateArtifact: 'boolean',
      updateFrom: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRoutineConfEnvsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The custom canary release environments that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * ["presetCanaryZheJiang"]
   */
  envsShrink?: string;
  /**
   * @remarks
   * The name of the routine. The name must be unique among the routines that belong to the same Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      envsShrink: 'Envs',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envsShrink: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


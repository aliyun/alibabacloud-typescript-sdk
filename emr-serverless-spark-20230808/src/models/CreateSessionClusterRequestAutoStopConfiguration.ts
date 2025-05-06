// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSessionClusterRequestAutoStopConfiguration extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic termination.
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The idle timeout period. The session is automatically terminated when the idle timeout period is exceeded.
   * 
   * @example
   * 60
   */
  idleTimeoutMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      idleTimeoutMinutes: 'idleTimeoutMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      idleTimeoutMinutes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


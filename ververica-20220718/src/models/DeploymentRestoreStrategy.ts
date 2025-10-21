// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeploymentRestoreStrategy extends $dara.Model {
  /**
   * @example
   * TRUE
   */
  allowNonRestoredState?: boolean;
  /**
   * @example
   * 1660293803155
   */
  jobStartTimeInMs?: number;
  /**
   * @example
   * LATEST_STATE
   */
  kind?: string;
  /**
   * @example
   * 354dde66-a3ae-463e-967a-0b4107fd****
   */
  savepointId?: string;
  static names(): { [key: string]: string } {
    return {
      allowNonRestoredState: 'allowNonRestoredState',
      jobStartTimeInMs: 'jobStartTimeInMs',
      kind: 'kind',
      savepointId: 'savepointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowNonRestoredState: 'boolean',
      jobStartTimeInMs: 'number',
      kind: 'string',
      savepointId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


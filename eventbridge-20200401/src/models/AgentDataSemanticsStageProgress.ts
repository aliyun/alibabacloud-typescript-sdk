// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgentDataSemanticsStageProgress extends $dara.Model {
  /**
   * @remarks
   * The stage name.
   * 
   * This parameter is required.
   * 
   * @example
   * PROFILE
   */
  stage?: string;
  /**
   * @remarks
   * The stage status.
   * 
   * This parameter is required.
   * 
   * @example
   * SUCCEEDED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      stage: 'Stage',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stage: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


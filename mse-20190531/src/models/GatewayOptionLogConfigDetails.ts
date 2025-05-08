// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class GatewayOptionLogConfigDetails extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  logEnabled?: boolean;
  logStoreName?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      logEnabled: 'LogEnabled',
      logStoreName: 'LogStoreName',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logEnabled: 'boolean',
      logStoreName: 'string',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


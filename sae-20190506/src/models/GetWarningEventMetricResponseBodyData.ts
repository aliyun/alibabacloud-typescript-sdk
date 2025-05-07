// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWarningEventMetricResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of the application.
   * 
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  appId?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * 10
   */
  warningCount?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      name: 'Name',
      regionId: 'RegionId',
      warningCount: 'WarningCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      name: 'string',
      regionId: 'string',
      warningCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Application extends $dara.Model {
  /**
   * @remarks
   * The application name. You can find the list of application names for each EMR distribution on the cluster creation page in the EMR console.
   * 
   * This parameter is required.
   * 
   * @example
   * SPARK
   */
  applicationName?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


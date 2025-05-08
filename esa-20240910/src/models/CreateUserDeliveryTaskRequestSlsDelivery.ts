// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserDeliveryTaskRequestSlsDelivery extends $dara.Model {
  /**
   * @remarks
   * The name of the SLS Logstore.
   * 
   * @example
   * accesslog-test
   */
  SLSLogStore?: string;
  /**
   * @remarks
   * The name of the SLS project.
   * 
   * @example
   * dcdn-test20240417
   */
  SLSProject?: string;
  /**
   * @remarks
   * The region in which the SLS project resides.
   * 
   * @example
   * cn-hangzhou
   */
  SLSRegion?: string;
  static names(): { [key: string]: string } {
    return {
      SLSLogStore: 'SLSLogStore',
      SLSProject: 'SLSProject',
      SLSRegion: 'SLSRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SLSLogStore: 'string',
      SLSProject: 'string',
      SLSRegion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


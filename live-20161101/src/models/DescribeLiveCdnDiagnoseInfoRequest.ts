// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveCdnDiagnoseInfoRequest extends $dara.Model {
  securityToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  app?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  domain?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  endTime?: number;
  intervalType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  phase?: number;
  requestType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  startTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  streamName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  streamSuffix?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      app: 'app',
      domain: 'domain',
      endTime: 'endTime',
      intervalType: 'intervalType',
      phase: 'phase',
      requestType: 'requestType',
      startTime: 'startTime',
      streamName: 'streamName',
      streamSuffix: 'streamSuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      app: 'string',
      domain: 'string',
      endTime: 'number',
      intervalType: 'string',
      phase: 'number',
      requestType: 'string',
      startTime: 'number',
      streamName: 'string',
      streamSuffix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


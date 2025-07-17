// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrafanaWorkspaceCustomDomain extends $dara.Model {
  /**
   * @example
   * protocol为http时无需填写;
   */
  cert?: string;
  /**
   * @example
   * 1688627798017
   */
  date?: number;
  /**
   * @example
   * mydomain.com
   */
  domain?: string;
  /**
   * @example
   * grafana-cn-***********
   */
  grafanaWorkspaceId?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * protocol为http时无需填写;
   */
  key?: string;
  /**
   * @example
   * true
   */
  privateZone?: string;
  /**
   * @example
   * https
   */
  protocol?: string;
  /**
   * @example
   * CreateSucceed
   */
  status?: string;
  /**
   * @example
   * /
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      cert: 'cert',
      date: 'date',
      domain: 'domain',
      grafanaWorkspaceId: 'grafanaWorkspaceId',
      id: 'id',
      key: 'key',
      privateZone: 'privateZone',
      protocol: 'protocol',
      status: 'status',
      uri: 'uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cert: 'string',
      date: 'number',
      domain: 'string',
      grafanaWorkspaceId: 'string',
      id: 'number',
      key: 'string',
      privateZone: 'string',
      protocol: 'string',
      status: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


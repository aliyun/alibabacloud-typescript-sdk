// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrafanaWorkspaceHttpApiProxyRequest extends $dara.Model {
  /**
   * @example
   * example1:
   * {"method":"GET","path":"/api/dashboards/tags"}
   * example2:
   * {
   *   "method": "POST",
   *   "path": "/api/dashboards/db",
   *   "headers": { "Content-Type": "application/json" },
   *   "body": "{\\"dashboard\\":{\\"id\\":null,\\"uid\\":null,\\"title\\":\\"demo\\",\\"schemaVersion\\":16},\\"overwrite\\":false}"
   * }
   * example3:
   * {"method":"GET","path":"/api/datasources","queryParams":{"type":["prometheus","mysql"]}}
   */
  bodyStr?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * grafana-cn-06f4xyxjo01
   */
  grafanaWorkspaceId?: string;
  /**
   * @example
   * 1
   */
  orgId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      bodyStr: 'BodyStr',
      grafanaWorkspaceId: 'GrafanaWorkspaceId',
      orgId: 'OrgId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyStr: 'string',
      grafanaWorkspaceId: 'string',
      orgId: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


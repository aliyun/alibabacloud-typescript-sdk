// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunApiTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * 接口名。
   * 
   * This parameter is required.
   * 
   * @example
   * CreateCluster
   */
  apiName?: string;
  /**
   * @remarks
   * 幂等客户端TOKEN。
   * 
   * @example
   * A7D960FA-6DBA-5E07-8746-A63E3E4D****
   */
  clientToken?: string;
  /**
   * @remarks
   * 地域ID。
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * 集群模板id。
   * 
   * This parameter is required.
   * 
   * @example
   * AT-****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      clientToken: 'string',
      regionId: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


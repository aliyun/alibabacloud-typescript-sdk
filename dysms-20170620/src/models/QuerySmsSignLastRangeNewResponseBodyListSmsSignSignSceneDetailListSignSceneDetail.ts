// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsSignLastRangeNewResponseBodyListSmsSignSignSceneDetailListSignSceneDetail extends $dara.Model {
  auditState?: string;
  sceneType?: number;
  static names(): { [key: string]: string } {
    return {
      auditState: 'AuditState',
      sceneType: 'SceneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditState: 'string',
      sceneType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


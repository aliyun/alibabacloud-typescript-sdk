// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorksEmbedListResponseBodyResultData extends $dara.Model {
  /**
   * @remarks
   * Embed time
   * 
   * @example
   * YYYY-mm-DD hh:MM:ss
   */
  embedTime?: string;
  /**
   * @remarks
   * Report ID
   * 
   * @example
   * 897ce25e-****-****-af84-d13c5610****
   */
  worksId?: string;
  /**
   * @remarks
   * Report name
   * 
   * @example
   * test
   */
  worksName?: string;
  /**
   * @remarks
   * Report type
   * 
   * @example
   * page
   */
  worksType?: string;
  /**
   * @remarks
   * Workspace ID
   * 
   * @example
   * 87c6b145-****-43e1-9426-8f93be23****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      embedTime: 'EmbedTime',
      worksId: 'WorksId',
      worksName: 'WorksName',
      worksType: 'WorksType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embedTime: 'string',
      worksId: 'string',
      worksName: 'string',
      worksType: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


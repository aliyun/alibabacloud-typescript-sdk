// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryDataServiceListResponseBodyResultDataContent } from "./QueryDataServiceListResponseBodyResultDataContent";


export class QueryDataServiceListResponseBodyResultData extends $dara.Model {
  /**
   * @remarks
   * The model of the data service in JSON format.
   */
  content?: QueryDataServiceListResponseBodyResultDataContent;
  /**
   * @remarks
   * Creator ID.
   * 
   * @example
   * 7cb94cd48701
   */
  creatorId?: string;
  /**
   * @remarks
   * Creator\\"s name.
   * 
   * @example
   * zhangsan
   */
  creatorName?: string;
  /**
   * @remarks
   * Cube identifier ID.
   * 
   * @example
   * d14e7448-0eb3-40d3-9375-4afef8de29fd
   */
  cubeId?: string;
  /**
   * @remarks
   * Dataset name.
   * 
   * @example
   * test data source
   */
  cubeName?: string;
  /**
   * @remarks
   * Description
   * 
   * @example
   * test
   */
  desc?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 2023-05-18 14:00:02.0
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Modification time.
   * 
   * @example
   * 2023-03-21 18:02:36
   */
  gmtModified?: string;
  /**
   * @remarks
   * Modifier\\"s userId.
   * 
   * @example
   * 7cb94cd48701
   */
  modifierId?: string;
  /**
   * @remarks
   * Modifier\\"s name
   * 
   * @example
   * zhangsan
   */
  modifierName?: string;
  /**
   * @remarks
   * Data service name.
   * 
   * @example
   * test report
   */
  name?: string;
  /**
   * @remarks
   * Owner ID
   * 
   * @example
   * 862801339
   */
  ownerId?: string;
  /**
   * @remarks
   * Owner\\"s name
   * 
   * @example
   * lisi
   */
  ownerName?: string;
  /**
   * @remarks
   * Unique ID of the data service.
   * 
   * @example
   * dtsuq3i31f5j8v848b
   */
  sid?: string;
  /**
   * @remarks
   * Workspace ID.
   * 
   * @example
   * 7350a155-0e94-4c6c-8620-57bbec38****
   */
  workspaceId?: string;
  /**
   * @remarks
   * Workspace name.
   * 
   * @example
   * test workspace
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      creatorId: 'CreatorId',
      creatorName: 'CreatorName',
      cubeId: 'CubeId',
      cubeName: 'CubeName',
      desc: 'Desc',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      modifierId: 'ModifierId',
      modifierName: 'ModifierName',
      name: 'Name',
      ownerId: 'OwnerId',
      ownerName: 'OwnerName',
      sid: 'Sid',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: QueryDataServiceListResponseBodyResultDataContent,
      creatorId: 'string',
      creatorName: 'string',
      cubeId: 'string',
      cubeName: 'string',
      desc: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      modifierId: 'string',
      modifierName: 'string',
      name: 'string',
      ownerId: 'string',
      ownerName: 'string',
      sid: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


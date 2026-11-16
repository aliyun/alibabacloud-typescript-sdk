// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInfiniteCanvasRequest extends $dara.Model {
  /**
   * @remarks
   * The cover URL.
   * 
   * @example
   * https://tagvvcloud-material-center-prod.oss-cn-hangzhou.aliyuncs.com/sumvideo/utils_image/sumvideo-video-cover.png
   */
  coverUrl?: string;
  /**
   * @remarks
   * The project ID. **[Deprecated]** Use ProjectId instead.
   * 
   * @example
   * pd_061716****
   */
  productionId?: string;
  /**
   * @remarks
   * The project ID. This field takes precedence.
   * 
   * @example
   * pd_061716****
   */
  projectId?: string;
  /**
   * @remarks
   * The project title.
   * 
   * This parameter is required.
   * 
   * @example
   * title
   */
  title?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * ws_zna577pdximv***
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      coverUrl: 'CoverUrl',
      productionId: 'ProductionId',
      projectId: 'ProjectId',
      title: 'Title',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverUrl: 'string',
      productionId: 'string',
      projectId: 'string',
      title: 'string',
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


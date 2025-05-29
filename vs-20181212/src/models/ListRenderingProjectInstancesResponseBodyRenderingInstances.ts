// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRenderingProjectInstancesResponseBodyRenderingInstancesStateInfo } from "./ListRenderingProjectInstancesResponseBodyRenderingInstancesStateInfo";


export class ListRenderingProjectInstancesResponseBodyRenderingInstances extends $dara.Model {
  /**
   * @example
   * 2024-09-11T18:19:04+08:00
   */
  associationTime?: string;
  /**
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  stateInfo?: ListRenderingProjectInstancesResponseBodyRenderingInstancesStateInfo;
  static names(): { [key: string]: string } {
    return {
      associationTime: 'AssociationTime',
      renderingInstanceId: 'RenderingInstanceId',
      stateInfo: 'StateInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associationTime: 'string',
      renderingInstanceId: 'string',
      stateInfo: ListRenderingProjectInstancesResponseBodyRenderingInstancesStateInfo,
    };
  }

  validate() {
    if(this.stateInfo && typeof (this.stateInfo as any).validate === 'function') {
      (this.stateInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


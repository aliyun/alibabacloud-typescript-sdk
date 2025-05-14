// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTicketRequestNotify } from "./CreateTicketRequestNotify";
import { CreateTicketRequestSceneContext } from "./CreateTicketRequestSceneContext";
import { CreateTicketRequestTenantContext } from "./CreateTicketRequestTenantContext";


export class CreateTicketRequest extends $dara.Model {
  /**
   * @example
   * []
   */
  customFields?: string;
  notify?: CreateTicketRequestNotify;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * G3IOe205RLciE
   */
  openTeamId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  openTemplateBizId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  processorUserIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SG
   */
  scene?: string;
  sceneContext?: CreateTicketRequestSceneContext;
  tenantContext?: CreateTicketRequestTenantContext;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Killer Ball Wo Mouichido
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      customFields: 'CustomFields',
      notify: 'Notify',
      openTeamId: 'OpenTeamId',
      openTemplateBizId: 'OpenTemplateBizId',
      processorUserIds: 'ProcessorUserIds',
      scene: 'Scene',
      sceneContext: 'SceneContext',
      tenantContext: 'TenantContext',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customFields: 'string',
      notify: CreateTicketRequestNotify,
      openTeamId: 'string',
      openTemplateBizId: 'string',
      processorUserIds: { 'type': 'array', 'itemType': 'string' },
      scene: 'string',
      sceneContext: CreateTicketRequestSceneContext,
      tenantContext: CreateTicketRequestTenantContext,
      title: 'string',
    };
  }

  validate() {
    if(this.notify && typeof (this.notify as any).validate === 'function') {
      (this.notify as any).validate();
    }
    if(Array.isArray(this.processorUserIds)) {
      $dara.Model.validateArray(this.processorUserIds);
    }
    if(this.sceneContext && typeof (this.sceneContext as any).validate === 'function') {
      (this.sceneContext as any).validate();
    }
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


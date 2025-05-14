// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailDescCensorResult extends $dara.Model {
  /**
   * @remarks
   * The label of the moderation result. Valid values:
   * 
   * *   **normal**: normal content.
   * *   **spam**: spam.
   * *   **ad**: ads.
   * *   **abuse**: abuse content.
   * *   **flood**: excessive junk content.
   * *   **contraband**: prohibited content.
   * *   **meaningless**: meaningless content.
   * 
   * @example
   * terrorism
   */
  label?: string;
  /**
   * @remarks
   * The score.
   * 
   * @example
   * 100
   */
  rate?: string;
  /**
   * @remarks
   * The moderation scenario. The value is **antispam**.
   * 
   * @example
   * antispam
   */
  scene?: string;
  /**
   * @remarks
   * The recommended subsequent operation. Valid values:
   * 
   * *   **pass**: The content passes the moderation.
   * *   **review**: The content needs to be manually reviewed.
   * *   **block**: The content needs to be blocked.
   * 
   * @example
   * review
   */
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      rate: 'Rate',
      scene: 'Scene',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      rate: 'string',
      scene: 'string',
      suggestion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


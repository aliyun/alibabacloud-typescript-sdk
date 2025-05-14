// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobBarrageCensorResult extends $dara.Model {
  /**
   * @remarks
   * The label of the moderation result. Separate multiple labels with commas (,). Valid values:
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
   * normal
   */
  label?: string;
  /**
   * @remarks
   * The score. Valid values: 0 to 100.
   * 
   * @example
   * 99.91
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
   * pass
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

